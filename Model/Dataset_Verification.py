# 주피터 노트북 쓰기 싫어서 이렇게 적었더니 굉장히 알아보기 힘들 것 같다...생각 좀 해봐야겠다.

print(type(trainset[0][0]), type(trainset[0][1]))


trainset[0][0].size()


# 1번 샘플
sample_img = trainset[1][0]
sample_img.size()


plt.imshow(sample_img.permute(1, 2, 0))


trainset[1][1]


sample_img.size()


numpy_sample = sample_img.numpy()
numpy_sample.shape


type(numpy_sample)


plt.imshow(numpy_sample.transpose(1, 2, 0)) # 차원 순서 변경할 때 tensor는 permute, ndarray는 transpose


figure, axes = plt.subplots(nrows=1, ncols=8, figsize=(22, 6))
for i in range(8):
  axes[i].imshow(trainset[i][0].permute(1, 2, 0), cmap='gray')
  axes[i].set_title(trainset[i][1])   
