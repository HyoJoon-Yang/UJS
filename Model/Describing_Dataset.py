# Colab
from google.colab import drive
drive.mount('/content/drive')  # Connecting to private google drive


# Setting up Google Colab

# Check if fastai and pytorch are installed
!pip list | grep -e fastai -e torch -e torchvision

# If not, uncomment this line and run to install them
#!pip install torch torchvision fastai


# Data Preparing

from PIL import Image
%matplotlib inline
import matplotlib
import matplotlib.pyplot as plt
import torch
from torch.utils.data import Dataset, DataLoader
import numpy as np
import torchvision
from torchvision import transforms


trans = transforms.Compose([transforms.Resize((100, 100)),                        # Resize
                            transforms.ToTensor(),                                # transform to Tensor
                            transforms.Normalize((0.5,0.5,0.5),(0.5,0.5,0.5))     # Normalization
                            ])
trainset = torchvision.datasets.ImageFolder(root = "/content/drive/MyDrive/Multi_Classification_Sample_Images",    # private file path
                                            transform = trans)                                                     # transform target


trainset.__getitem__(18)  # Check 18th image dataframe and label


len(trainset)    # Check how many trainset data


classes = trainset.classes
classes          # Check how many classes


# Upload data using DataLoader

trainloader = DataLoader(trainset,             # Target data
                         batch_size = 16,      # batch size
                         shuffle = False,      # shuffle train data
                         num_workers = 2)      # the number CPU core that you want to use


dataiter = iter(trainloader)
images, labels = next(dataiter)
print(labels)


# Data visualization

def imshow(img):
    img = img / 2 + 0.5 # unnormalize
    np_img = img.numpy()
    # plt.imshow(np_img)
    plt.imshow(np.transpose(np_img, (1,2,0)))

    print(np_img.shape)                                         # torch.Size([16, 3, 100, 100])
    print((np.transpose(np_img, (1,2,0))).shape)                # (3, 410, 410)
    
print(images.shape)                                             # (410, 410, 3)
imshow(torchvision.utils.make_grid(images, nrow=4))  
print(images.shape)                                             # torch.Size([16, 3, 100, 100])
print((torchvision.utils.make_grid(images)).shape)              # torch.Size([3, 206, 818])
print("".join("%5s "%classes[labels[j]] for j in range(16)))    # adress adress adress adress adress adress adress adress adress adress adress adress adress adress adress adress 
