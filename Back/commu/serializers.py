from rest_framework import serializers
from .models import Post
from users.serializers import TinyUserSerializer


class PostDetailSerializer(serializers.ModelSerializer):
    owner = TinyUserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"




class PostListSerializer(serializers.ModelSerializer):
    
    class Meta:
        owner = TinyUserSerializer(read_only=True)
        model = Post
        fields = "__all__"
        
class TinyPostSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Post
        fields = (
            "pk",
            "create_at",
            "update_at",
        )

