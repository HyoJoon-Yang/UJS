from django.contrib import admin
from .models import Post, Notice


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    pass


@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    pass