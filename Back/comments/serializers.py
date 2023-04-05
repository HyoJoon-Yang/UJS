from rest_framework import serializers


from users.serializers import TinyUserSerializer
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    owner = TinyUserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = (
            "owner",
            "post",
            "contents",
        
        )
