from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    # 성별 class
    class GenderChoices(models.TextChoices):
        MALE = "male", "남자"
        FEMALE = "female", "여자"
    username = None
    email = models.EmailField(_('email address'), unique=True)


    avatar = models.ImageField(upload_to="my_profile", blank=True)              # 프로필 이미지
    name = models.CharField(null=True, blank=True, max_length=10)              # 이름
    nickname = models.CharField(max_length=10, unique=True)          # 닉네임

    terms = models.BooleanField(default=False)          # 약관

    gender = models.CharField(                          # 성별 선택
        max_length=10, 
        null=True,
        blank=True, 
        choices=GenderChoices.choices
    )

    height = models.PositiveIntegerField(null=True, blank=True)     # 키
    weight = models.PositiveIntegerField(null=True, blank=True)     # 몸무게

    rank = models.PositiveIntegerField(null=True, default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def __str__(self):
        return self.email


class UserInfo(models.Model):                              # 사용자 정보
    
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null = True,
        related_name="userinfo",
    )

    score = models.FloatField(null=True, validators=[MinValueValidator(0.0)])

    def __str__(self):
        return f"{self.user.name}"
    
    class Meta:
        verbose_name_plural = "user info"
    