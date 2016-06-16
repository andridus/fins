import os
import urllib.parse
import http.server
import socketserver

PORT = 8000
HOST=('0.0.0.0', PORT)

class Handler(http.server.SimpleHTTPRequestHandler):
	def do_GET(self):
	    urlparts = urllib.parse.urlparse(self.path)
	    request_file_path = urlparts.path.strip("/")
	    print(request_file_path)
	    if not os.path.exists(request_file_path):
	        self.path = 'index.html'
	    return http.server.SimpleHTTPRequestHandler.do_GET(self)

httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()
