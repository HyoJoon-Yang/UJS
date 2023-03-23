from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.exceptions import NotFound, NotAuthenticated, ParseError, PermissionDenied
from rest_framework.status import HTTP_204_NO_CONTENT

from .models import Post, Notice
from categories.models import Category
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
                # category_pk = request.data.get("category")
                # if not category_pk:
                #     raise ParseError("카테고리를 입력해주세요")
                # try:
                #     category = Category.objects.get(pk=category_pk)
                #     if category.kind == Category.CategoryKindChoices.NOTICES:
                #         raise ParseError("카테고리 타입을 확인해 주세요")
                # except Category.DoesNotExist:
                #     raise ParseError("카테고리가 존재하지 않습니다")
                posts = serializer.save(
                    owner=request.user,
                    # category=category,
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
            # category_pk = request.data.get("category")
            # if category_pk:
            #     try:
            #         category = Category.objects.get(pk=category_pk)
            #         if category.kind == Category.CategoryKindChoices.NOTICES:
            #             raise ParseError("카테고리 타입을 확인해 주세요")
            #     except Category.DoesNotExist:
            #         raise ParseError("카테고리가 존재하지 않습니다")
            #     post = serializer.save(category=category)
            # else:
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