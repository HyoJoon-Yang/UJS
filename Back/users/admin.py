from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, UserInfo


@admin.register(User)
class UserAdmin(UserAdmin):
    ordering = ('email',)
    fieldsets = (
        (
            "Profile",
            {
                "fields" : ("avator", "email","name", "nickname", "terms","gender",
                            "height", "weight",),
            },
        ),

        # 사용자 세부사항
        ("Permissions", 
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
                "classes": ("collapse",),
            },
        ),
        ("Important Dates",
            {"fields": ("last_login", "date_joined"),
             "classes": ("collapse",),
            },
        ), 
    )
    list_display = ("email", "name", "nickname")

    add_fieldsets = (
            (None, {'fields': ('email', 'password1', 'password2')}),
        )



@admin.register(UserInfo)
class UserInfoAdmin(admin.ModelAdmin):
    pass