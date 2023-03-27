from django.urls import path
from . import views

urlpatterns = [
    path("", views.CreateUser.as_view()),
    path("me", views.MyProfile.as_view()),
    path("log-in", views.LogIn.as_view()),
    path("log-out", views.LogOut.as_view()),
    path("<str:nickname>", views.PublicUser.as_view()),
]
