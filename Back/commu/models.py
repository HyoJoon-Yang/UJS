from django.db import models
from django.urls import reverse

class Post(models.Model):
    class CategoryKindChoices(models.TextChoices):
        POSTS = "posts", "자유게시판"
        NOTICES = "notices", "공지사항"
        SUGGEST = "suggest", "건의사항"
    kind = models.CharField(max_length=10, blank=True, choices=CategoryKindChoices.choices)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(
        blank=True,
        upload_to="post/%Y/%m/%d",
        help_text="여기는 게시판들 이미지",
    )
    
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateField(auto_now=True)
    
    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="posts",
    )
    
    def get_absolute_url(self):
        return reverse("front:commu_detail", args=[self.pk])
        
    def __str__(self):
        return f"{self.title}"
    
