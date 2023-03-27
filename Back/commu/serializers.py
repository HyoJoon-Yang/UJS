from rest_framework import serializers
from .models import Post, Notice
from users.serializers import TinyUserSerializer


class PostDetailSerializer(serializers.ModelSerializer):
    owner = TinyUserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"


class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "id",
            "title",
            "content",
            "owner",
            "kind",
        )



class NoticeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = "__all__"
