from rest_framework import serializers
from commu.serializers  import TinyPostSerializer

from users.serializers import TinyUserSerializer
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    owner = TinyUserSerializer(read_only=True)
    post = TinyPostSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = (
            "owner",
            "post",
            "contents",
        
        )
