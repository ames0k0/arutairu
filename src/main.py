#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from aiohttp import web
import aiohttp_jinja2
import jinja2


@aiohttp_jinja2.template('polygon.html')
async def index(request):
  return None


app = web.Application()


aiohttp_jinja2.setup(
  app,
  loader=jinja2.FileSystemLoader('src/templates')
)


app['static_root_url'] = 'static'


app.router.add_static('/static/', 'src/static', name='static')
app.router.add_get('/', index)


web.run_app(app)
