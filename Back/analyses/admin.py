from django.contrib import admin
from .models import Analysis

@admin.register(Analysis)
class AnalysisAdmin(admin.ModelAdmin):
    pass
