from django.db import models


class Analysis(models.Model):
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="analyses",
    )

    video = models.OneToOneField(
        "medias.Video",
        null=True,
        on_delete=models.SET_NULL,
        related_name="analyses",
    )

    
