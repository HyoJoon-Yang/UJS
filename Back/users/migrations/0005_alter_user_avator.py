# Generated by Django 4.1.6 on 2023-04-04 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0004_alter_user_avator"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="avator",
            field=models.ImageField(
                default="media/img/user_default_img.png", upload_to="my_profile"
            ),
        ),
    ]
