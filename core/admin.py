from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Post)
admin.site.register(Patner)
admin.site.register(Course)
admin.site.register(Video)
admin.site.register(Publication)
admin.site.register(Leadership)
admin.site.register(Webinar)


admin.site.site_header='INFLUENCE XXI ADMIN'
admin.site.site_title='INFLUENCE XXI ADMIN'
