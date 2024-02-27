from django.db import models
from markdownx.models import MarkdownxField

class Blog(models.Model): # 記事の内容
  date = models.DateField(auto_now_add=True)
  title = models.CharField(max_length=100)
  content = MarkdownxField()
  isPublic = models.BooleanField(default=False)
  
  def __str__(self):
    return self.title

class Comment(models.Model): # コメントの内容
  date = models.DateField(auto_now_add=True)
  content = models.TextField()
  blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.content
