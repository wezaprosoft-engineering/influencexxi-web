from django.shortcuts import render
from django.views.generic import *
from .models import *
from .forms import *
from django.urls import *
# Create your views here.


def index(request):
	posts=Post.objects.all()
	patners=Patner.objects.all()
	courses=Course.objects.all()
	videos=Video.objects.all()
	publications=Publication.objects.all()
	leaderships=Leadership.objects.all()
	webinars=Webinar.objects.all()

	context={
	'posts':posts,
	'patners':patners,
	'courses':courses,
	'videos':videos,
	'publications':publications,
	'leaderships':leaderships,
	'webinars':webinars
	}

	return render(request, 'main.html', context)


class PostDetail(DetailView):
	model=Post
	template_name='post_detail.html'


class Message(CreateView):
    model = Contact
    form_class = ContactForm
    template_name='new_message.html'
    success_url = reverse_lazy('index')

def main(request):
	return render(request, 'main.html')