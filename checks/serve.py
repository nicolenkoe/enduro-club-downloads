import http.server,socketserver,pathlib
site=pathlib.Path('_site').resolve();game=site/'play'
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?',1)[0]
  prefix='/enduro-club-downloads/'
  if path.startswith(prefix):path=path[len(prefix):]
  else:path=path.lstrip('/')
  if '..' in pathlib.PurePosixPath(path).parts:return '/not-found'
  return str(game/path[5:]) if path.startswith('play/') else str(site/path)
with socketserver.TCPServer(('127.0.0.1',5282),Handler) as server:server.serve_forever()
