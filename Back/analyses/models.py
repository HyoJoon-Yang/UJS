from django.db import models


class Analysis(models.Model):
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="analyses",
    )

    video = models.FileField(upload_to="my_video", null=True)

    info = models.ForeignKey(
        "users.UserInfo",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )

