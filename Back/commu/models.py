from django.db import models


class Post(models.Model):
    class CategoryKindChoices(models.TextChoices):
        POSTS = "posts", "자유게시판"
        NOTICES = "notices", "공지사항"
        SUGGEST = "suggest", "건의사항"
    kind = models.CharField(max_length=10, blank=True, choices=CategoryKindChoices.choices)
    title = models.CharField(max_length=30)
    content = models.TextField()
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateField(auto_now=True)

    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="posts",
    )

    def __str__(self):
        return f"{self.title}"


class Notice(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateField(auto_now=True)
    
    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="notices",
    )
    
    category = models.ForeignKey(
        "categories.Category",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="notices",
    )

    def __str__(self):
        return f"{self.title}"
    