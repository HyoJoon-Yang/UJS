# Generated by Django 4.1.6 on 2023-04-04 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Post",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "kind",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("posts", "자유게시판"),
                            ("notices", "공지사항"),
                            ("suggest", "건의사항"),
                        ],
                        max_length=10,
                    ),
                ),
                ("title", models.CharField(max_length=30)),
                ("content", models.TextField()),
                (
                    "image",
                    models.ImageField(
                        blank=True, help_text="여기는 게시판들 이미지", upload_to="post/%Y/%m/%d"
                    ),
                ),
                ("create_at", models.DateField(auto_now_add=True)),
                ("update_at", models.DateField(auto_now=True)),
            ],
        ),
    ]
