from django.contrib import admin
from .models import Blog,Comment
from markdownx.admin import MarkdownxModelAdmin

admin.site.register(Comment)
admin.site.register(Blog, MarkdownxModelAdmin)