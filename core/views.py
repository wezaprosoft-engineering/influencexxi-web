from django.shortcuts import render
from django.views.generic import *
from .models import *
# Create your views here.


def index(request):
	posts=Post.objects.all()
	patners=Patner.objects.all()
	courses=Course.objects.all()
	videos=Video.objects.all()
	publications=Publication.objects.all()
	leaderships=Leadership.objects.all()

	context={
	'posts':posts,
	'patners':patners,
	'courses':courses,
	'videos':videos,
	'publications':publications,
	'leaderships':leaderships
	}

	return render(request, 'index.html', context)


class PostDetail(DetailView):
	model=Post
	template_name='post_detail.html'
