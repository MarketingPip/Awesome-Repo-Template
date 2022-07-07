#! /usr/bin/env python
# -*- coding: utf-8 -*-


import sys

import codecs
import urllib.request, json 



https://api.github.com/repos/MarketingPip/Awesome-Repo-Template

SiteTitle =  os.environ['INPUT_STORE1']
 	

with urllib.request.urlopen(f"https://api.github.com/repos/MarketingPip/Awesome-Repo-Template") as url:
    data = json.loads(url.read().decode())
    SiteDescription = data['description']



# README File Path
input_file = "README.md"
input_file_contents = None

# Open our README file 
try:
    with codecs.open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"""<head><title>{SiteTitle}</title>
	   {SiteDescription}
            <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js"></script>   
     </head>""" + """
<!--Body Content -->
<body>
<github-md>
""" + 

   input_file_contents + """
    </github-md>
	</body>
	 <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Markdown-Tag/markdown-tag-GitHub.js"></script> 
	""")
except IOError:
    sys.exit(u'Unable to write to file: {0}'.format(output_file))

