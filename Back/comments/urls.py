from django.urls import path
from . import views

urlpatterns = [
    path("", views.Comments.as_view()),
    path("<int:pk>/", views.CommentViewSet.as_view()),
]