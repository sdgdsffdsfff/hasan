# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2018-05-28 03:24
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('deploy', '0011_auto_20180528_1120'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deployinfo',
            name='user',
        ),
        migrations.AddField(
            model_name='deployinfo',
            name='user',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
