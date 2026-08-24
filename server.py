import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run(port=9000):
    root_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(root_dir)
    server_address = ('127.0.0.1', port)
    httpd = ThreadingHTTPServer(server_address, CustomHandler)
    print(f"Serving HTTP on 127.0.0.1 port {port} (http://127.0.0.1:{port}/) ...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 9000
    run(port)
