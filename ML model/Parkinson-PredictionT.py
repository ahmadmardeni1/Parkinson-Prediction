from tensorflow import keras
from tensorflow.keras import layers

from keras.optimizers import Adam
from keras.callbacks import EarlyStopping

model = keras.Sequential([
        layers.Conv2D(32,(3,3),input_shape=(128, 128, 3),activation='relu'),
        layers.MaxPooling2D(pool_size=(2,2)),
        layers.Conv2D(32,(3,3),activation='relu'),
        layers.MaxPooling2D(pool_size=(2,2)),
        layers.Flatten(),
        layers.Dense(activation='relu',units=128),
        layers.Dense(activation='sigmoid',units=1),
])

early_stopping = keras.callbacks.EarlyStopping(
    patience=10,
    min_delta=0.001,
    restore_best_weights=True,
)

model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['binary_accuracy'],
)
