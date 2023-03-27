from rest_framework import serializers
from .models import Analysis
from users.serializers import TinyUserSerializer

class UserAnalysisSerializer(serializers.ModelSerializer):
    user = TinyUserSerializer(read_only=True)

    class Meta:
        model = Analysis
        fields = (
            "user",
            "video",
        )


class VideoUploadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Analysis
        fields = (
            "id",
            "video",
        )