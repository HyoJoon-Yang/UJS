from django.db import models


class Comment(models.Model):

    

    owner = models.ForeignKey(
        "users.User",
        related_name="comments",
        on_delete=models.DO_NOTHING,
    )
    post = models.ForeignKey(
        "commu.Post",
        related_name="comments",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    contents = models.TextField()

    def __str__(self) -> str:
        return f"{self.owner}"
