from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import ParseError
from .serializers import UserAnalysisSerializer, VideoUploadSerializer

from .models import Analysis

class UserAnalysis(APIView):
    def post(self, request):
        serializer = UserAnalysisSerializer(data=request.data)
        if serializer.is_valid():
            video = serializer.save(
                user=request.user
            )
            return Response(UserAnalysisSerializer(video).data)
        else:
            return Response(serializer.errors)
