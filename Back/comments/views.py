from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from .models import Comment
from .serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, NotAuthenticated, ParseError, PermissionDenied
from rest_framework.status import HTTP_204_NO_CONTENT

class Comments(APIView):
    def get(self, request):
        all_comments = Comment.objects.all()
        serializer = CommentSerializer(all_comments, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        if request.user.is_authenticated:
            serializer = CommentSerializer(data=request.data)
            if serializer.is_valid():
                comments = serializer.save(
                    owner=request.user,
                )
                return Response(CommentSerializer(comments).data)
            else:
                return Response(serializer.errors)
        else:
            raise NotAuthenticated
    
class CommentViewSet(APIView):
    def get_object(self, pk):
        
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound
    
    def get(self, request, pk):
        comment = self.get_object(pk)
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    
    def put(self, request, pk):
        comment = self.get_object(pk)
        if not request.user.is_authenticated:
            raise NotAuthenticated
        if comment.owner != request.user:
            raise PermissionDenied
        serializer = CommentSerializer(comment, data=request.data, partial=True)
        if serializer.is_valid():
            comment = serializer.save()
            return Response(CommentSerializer(comment).data)
        else:
            return Response(serializer.errors)

    
    def delete(self, request, pk):
        comment = self.get_object(pk)
        if not request.user.is_authenticated:
            raise NotAuthenticated
        if comment.owner != request.user:
            raise PermissionDenied
        comment.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    




