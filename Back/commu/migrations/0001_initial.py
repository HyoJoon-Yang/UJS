# Generated by Django 3.2.5 on 2023-04-01 17:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kind', models.CharField(blank=True, choices=[('posts', '자유게시판'), ('notices', '공지사항'), ('suggest', '건의사항')], max_length=10)),
                ('title', models.CharField(max_length=30)),
                ('content', models.TextField()),
                ('image', models.ImageField(blank=True, help_text='여기는 게시판들 이미지', upload_to='post/%Y/%m/%d')),
                ('create_at', models.DateField(auto_now_add=True)),
                ('update_at', models.DateField(auto_now=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
