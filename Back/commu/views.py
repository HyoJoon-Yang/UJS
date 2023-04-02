from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.exceptions import NotFound, NotAuthenticated, ParseError, PermissionDenied
from rest_framework.status import HTTP_204_NO_CONTENT

from .models import Post
from .serializers import PostListSerializer, PostDetailSerializer


# 게시글들
class Posts(APIView):
    def get(self, request):
        all_posts = Post.objects.all()
        serializer = PostListSerializer(all_posts, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        if request.user.is_authenticated:
            serializer = PostDetailSerializer(data=request.data)
            if serializer.is_valid():
                posts = serializer.save(
                    owner=request.user,
                )
                return Response(PostDetailSerializer(posts).data)
            else:
                return Response(serializer.errors)
        else:
            raise NotAuthenticated
    
    
# 게시글 내용
class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise NotFound
    
    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostDetailSerializer(post)
        return Response(serializer.data)
    
    def put(self, request, pk):
        post = self.get_object(pk)
        if not request.user.is_authenticated:
            raise NotAuthenticated
        if post.owner != request.user:
            raise PermissionDenied
        serializer = PostDetailSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            post = serializer.save()
            return Response(PostDetailSerializer(post).data)
        else:
            return Response(serializer.errors)

    
    def delete(self, request, pk):
        post = self.get_object(pk)
        if not request.user.is_authenticated:
            raise NotAuthenticated
        if post.owner != request.user:
            raise PermissionDenied
        post.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    




