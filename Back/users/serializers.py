from rest_framework import serializers
from .models import User, UserInfo


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            "email",
            "password",
        )


class UserInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserInfo
        fields = "__all__"


class TinyUserSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = User
        fields = (
            "avator",
            "name",
            "nickname",
        )


class PrivateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = (
            "password",
            "is_superuser",
            "last_login",
            "first_name",
            "last_name",
            "date_joined",
            "is_staff",
            "is_active",
            "groups",
            "user_permissions",
        )