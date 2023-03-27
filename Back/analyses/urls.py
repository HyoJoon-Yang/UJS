from django.urls import path
from . import views

urlpatterns = [
    path("", views.UserAnalysis.as_view()),
]