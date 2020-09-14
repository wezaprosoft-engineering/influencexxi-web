from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.

class Post(models.Model):
	title=models.CharField(max_length=200)
	author=models.CharField(max_length=200)
	body=RichTextField()
	image=models.ImageField(upload_to='blog-images')
	date_created=models.DateTimeField(auto_now_add=True)
	date_modified=models.DateTimeField(auto_now_add=True)
	published=models.BooleanField(default=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering=('-date_created',)



class Patner(models.Model):
	title=models.CharField(max_length=200, null=True, blank=True)
	image=models.ImageField(upload_to='patner-images')
	date_created=models.DateTimeField(auto_now_add=True)

	# def __str__(self):
	# 	return self.str(date_created)

	class Meta:
		ordering=('-date_created',)


class Course(models.Model):
	title=models.CharField(max_length=200)
	image=models.ImageField(upload_to='course-images')
	date_created=models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering=('-date_created',)


class Video(models.Model):
	title=models.CharField(max_length=200)
	image=models.ImageField(upload_to='video-images')
	date_created=models.DateTimeField(auto_now_add=True)
	link=models.URLField(null=True,blank=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering=('-date_created',)


class Publication(models.Model):
	title=models.CharField(max_length=200)
	image=models.ImageField(upload_to='publication-images')
	date_created=models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering=('-date_created',)



class Leadership(models.Model):
	title=models.CharField(max_length=200)
	image=models.ImageField(upload_to='publication-images')
	date_created=models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering=('-date_created',)


