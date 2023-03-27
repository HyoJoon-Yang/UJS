from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.exceptions import NotFound, NotAuthenticated, ParseError, PermissionDenied
from rest_framework.status import HTTP_204_NO_CONTENT

from .models import Post, Notice
from .serializers import PostListSerializer, PostDetailSerializer, NoticeListSerializer


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
        if request.user.is_authenticated:
            raise NotAuthenticated
        if post.owner != request.user:
            raise PermissionDenied
        post.delete()
        return Response(status=HTTP_204_NO_CONTENT)




# 공지사항들
class Notices(APIView):
    def get(self, request):
        all_notices = Notice.objects.all()
        serializer = NoticeListSerializer(all_notices, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        pass


# 공지사항 내용
class NoticeDetail(APIView):
    def get_object(self, pk):
        try:
            return Notice.objects.get(pk=pk)
        except Notice.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        notice = self.get_object(pk)
        serializer = NoticeListSerializer(notice)
        return Response(serializer.data)

    def put(self, request, pk):
        pass

    def delete(self, request, pk):
        pass