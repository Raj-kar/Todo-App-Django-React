# Generated by Django 3.2.1 on 2021-05-05 21:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='comeplete',
            new_name='complete',
        ),
    ]
