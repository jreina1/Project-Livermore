'''
Created on Apr 7, 2018

@author: user
'''

import io
import json
import requests
import pprint
from os import listdir, path
from os.path import isfile, join, getmtime
from random import randint
from threading import Thread
import time
import subprocess


class FHIRHelper(object):
    
    def __init__(self):
        pass

    def waitTillReady(self):
        ready = False
        time.sleep(60)
        while True:
            if 1==1:
                ready = True
                break
            time.sleep(1)
        return ready
        
        
    def loadFhir(self):

        url = "http://localhost:8080/baseDstu3"
        doclistpath = "/home/user/code/repo/Project-Livermore/project/pl-fhircxn/patients"
        logName = "/home/user/code/repo/Project-Livermore/project/pl-fhircxn/bin/log.txt"
    
        url = "http://pl-fhir:8080/baseDstu3"
        doclistpath = "/app/patients"
        logName = "/app/bin/log.txt"

        log = open(logName, "w")
        log.write("this is a test")
                    
        headers = {'Content-Type': 'application/json',
                   'accept': 'application/json+fhir',
                   'connection': 'close'} # set what your server accepts
    
        onlyfiles = [s for s in sorted(listdir(doclistpath))
                     if path.isfile(join(doclistpath, s))]
         
        for f in onlyfiles:
    #     if 1==1:
    #         f = onlyfiles[2]
            f = doclistpath + "/" + f
            print f
            log.write("*------ File: " + f)
            
            with io.open(f, 'r', encoding='utf-8') as h:
                pjs = json.load(h)
                pjs[u'type'] = "transaction"
                         
                for i in range(0,len(pjs[u'entry'])):
                    if u'id' in pjs[u'entry'][i][u'resource']:
                        resourceId = pjs[u'entry'][i][u'resource'][u'id']
                        print resourceId
                        log.write(resourceId)
                    else:
                        print "Error in bundle ", i, pjs[u'entry'][i][u'resource'][u'resourceType']
                        resourceId = str(randint(0,50000))+"d" 
                        log.write(resourceId)                   
                    resourceType = pjs[u'entry'][i][u'resource'][u'resourceType']
                    print resourceType
                    log.write(resourceType)
                    objUrl = resourceType + "/" + resourceId
                      
                    pjs[u'entry'][i].update({"request": {"method": "PUT", "url" : objUrl}})
    
                 
                data = json.dumps(pjs)
                log.write(json.dumps(pjs, indent=4, sort_keys=True))
         
            r = requests.post(url=url, data=data, headers=headers)
            print r 
            log.write(str(r))
            
        self.runFhirCxn()
            
    def runFhirCxn(self):
        
#         workdir = "/home/user/code/repo/Project-Livermore/project/pl-fhircxn/bin"
        workdir = "/app/bin"
        cmd = "cd " + workdir + ";java -cp fhirConnector-1.0.jar FHIRConnector"
        
        o = subprocess.check_output(cmd, shell=True, stderr=subprocess.STDOUT)
        
        t = o.decode("utf-8")
        
        t = t.strip("\n")
        
        print t
    
if __name__ == '__main__':
    
    fh = FHIRHelper() 
    
    while True:
        ready = fh.waitTillReady()
        if ready is True:
            break
#     fh.loadFhir()

#     Create two threads as follows
    try:
        t = Thread(target=fh.loadFhir(), args=())
#         fh.runFhirCxn()
    except:
       print "Error: unable to start thread"
    
#     while 1:
#        pass    