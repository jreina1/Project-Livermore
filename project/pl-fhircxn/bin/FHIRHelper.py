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
#         time.sleep(5)
        
        while True:
            avail = self.areServicesAvailable()
            if avail is True:
                ready = True
                break
            time.sleep(1)
            
        time.sleep(5)
        return ready
        
    def areServicesAvailable(self):
        good = False
        
#         cmd = "nc -z -v localhost 8080"
        cmd = "nc -z -v pl-fhir 8080"
       
        try:
            o = subprocess.check_output(cmd, shell=True, stderr=subprocess.STDOUT)
        
            t = o.decode("utf-8")
        
            if "open" in t or "succeed" in t:
                good = True
            else:
                good   = False
                
            print "port is good ", good, t
        except:
            print "ip not ready yet"
            
        return good
            
    def runFhirCxn(self):
        
        workdir = "/home/user/code/repo/Project-Livermore/project/pl-fhircxn/bin"
        workdir = "/app/bin"
        cmd = "cd " + workdir + ";java -cp fhirConnector-1.0.jar FHIRConnector"
        
        o = subprocess.check_output(cmd, shell=True, stderr=subprocess.STDOUT)
        
        t = o.decode("utf-8")
        
        t = t.strip("\n")
        
        print t
        
    def loadFhir(self):
        
#         workdir = "/home/user/code/repo/Project-Livermore/project/pl-fhircxn/bin"
        
        cmd = "cd /app/tag-uploader;"
        cmd += "node . --silent -d ../patients -S http://pl-fhir:8080/baseDstu3"
        
        o = subprocess.check_output(cmd, shell=True, stderr=subprocess.STDOUT)
        
        t = o.decode("utf-8")
        
        t = t.strip("\n")
        
        print t            
        
        time.sleep(5)
        
        self.runFhirCxn()
   
    
if __name__ == '__main__':
    
    fh = FHIRHelper() 
    
        
    while True:
        ready = fh.waitTillReady()
        if ready is True:
            break
  
#     Create thread as follows
    try:
        t = Thread(target=fh.loadFhir(), args=())
    except:
       print "Error: unable to start thread"
     
     
    while 1:
       pass    
