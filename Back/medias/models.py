from django.db import models


class Photo(models.Model):
    file = models.ImageField()

    post = models.ForeignKey(
        "commu.Post",
        on_delete=models.CASCADE,
        related_name="photos",
    )


class Video(models.Model):
    file = models.FileField()

    post = models.ForeignKey(
        "commu.Post",
        on_delete=models.CASCADE,
        related_name="videos",
    )

