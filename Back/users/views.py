from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_400_BAD_REQUEST

from .models import User, UserInfo
from .serializers import PrivateUserSerializer, UserCreateSerializer


class CreateUser(APIView):
    def post(self, request):
        password = request.data.get('password')
        if not password:
            raise ParseError("패스워드를 입력해주세요")
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(password) # password가 hash로 저장이 된다
            user.save()
            serializer = UserCreateSerializer(user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class MyProfile(APIView):
    
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = PrivateUserSerializer(user)
        return Response(serializer.data)
    
    def put(self, request):
        user = request.user
        serializer = PrivateUserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            user = serializer.save()
            serializer = PrivateUserSerializer(user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        

class PublicUser(APIView):
    def get(self, request, nickname):
        try:
            user = User.objects.get(nickname=nickname)
        except User.DoesNotExist:
            raise NotFound
        serializer = PrivateUserSerializer(user)
        return Response(serializer.data)
    

class LogIn(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if not email or not password:
            raise ParseError
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            return Response({"ok":"Welcome!"})
        else:
            return Response({"error":"wrong password"}, status=HTTP_400_BAD_REQUEST)
        

class LogOut(APIView):
    
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"ok":"bye!"})