from django.views.generic.list import ListView
from django.views.generic import TemplateView
from django.shortcuts import get_object_or_404
from django.core.urlresolvers import reverse
from django.conf import settings


class Home(TemplateView):
    template_name = 'index.html'
