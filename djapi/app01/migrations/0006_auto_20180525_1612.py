# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2018-05-25 08:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app01', '0005_updatefiles'),
    ]

    operations = [
        migrations.AlterField(
            model_name='updatefiles',
            name='created',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
