from django.db import models

# Create your models here.
class Vtubers(models.Model):
	name = models.CharField(max_length=255)

	def __str__(self):
		return self.name

class Content(models.Model):
	title = models.CharField(max_length=255)
	coutnName = models.CharField(max_length=255)
	img = models.ImageField(null=True, blank=True, upload_to="img/")
	audio = models.FileField(null=True, blank=True, upload_to="audio/")
	vtuber = models.ForeignKey(Vtubers, null=True, on_delete=models.SET_NULL)

	def __str__(self):
		return self.title