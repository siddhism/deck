from django import template
from django.shortcuts import get_object_or_404


register = template.Library()

@register.filter(name='addclass')
def addclass(field, css):
    if field:
        return field.as_widget(attrs={"class":css})
    else:
        return ''
