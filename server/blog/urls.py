from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListBlog.as_view()), 
    path('<int:pk>/', views.DetailBlog.as_view()), #1日の詳細
    path('<str:cat>/', views.CategoryBlog.as_view()), #カテゴリ別一覧
]