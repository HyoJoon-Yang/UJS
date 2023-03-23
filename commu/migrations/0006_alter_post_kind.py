# Generated by Django 4.1.6 on 2023-03-21 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("commu", "0005_alter_post_kind"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="kind",
            field=models.CharField(
                blank=True,
                choices=[("posts", "자유게시판"), ("notices", "공지사항"), ("suggest", "건의사항")],
                max_length=10,
            ),
        ),
    ]
