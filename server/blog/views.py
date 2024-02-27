from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets, filters

from .models import Blog

class ListBlog(APIView):
  def get(self,request):
    blogs = Blog.objects.filter(isPublic=True).order_by('-date')
    data = []
    for blog in blogs:
      data.append({
        'id': blog.id,
        'date': blog.date,
        'title': blog.title,
      })
    return Response(data)

class DetailBlog(APIView):
  def get(self,request,pk):
    blog = Blog.objects.get(pk=pk)
    data = {
      'id': blog.id,
      'date': blog.date,
      'title': blog.title,
      'content': blog.content,
    }
    return Response(data)
  
class CategoryBlog(APIView):
  def get(self,request,cat):
    blogs = Blog.objects.filter(isPublic=True).filter(category=cat).order_by('-date')
    data = []
    for blog in blogs:
      data.append({
        'id': blog.id,
        'date': blog.date,
        'title': blog.title,
      })
    return Response(data)  
  