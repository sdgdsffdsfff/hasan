# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2018-05-28 08:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('deploy', '0017_deployinfo_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deployinfo',
            name='project',
        ),
    ]
