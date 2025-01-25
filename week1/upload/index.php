<?php
// معالجة طلب رفع الصورة
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // اسم المجلد لتخزين صور البروفايل
    $profileDir = 'files/';

    // تأكد من وجود المجلد، وإذا لم يكن موجودًا، أنشئه
    if (!is_dir($profileDir)) {
        mkdir($profileDir, 0755, true);
    }

    // بيانات الصورة المرفوعة
    $fileName = $_FILES['files']['name'];
    $fileTmpPath = $_FILES['files']['tmp_name'];
    $fileError = $_FILES['files']['error'];
    $fileType = $_FILES['files']['type'];

    // التحقق من نوع الملف (أن يكون صورة)
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if ($fileError === UPLOAD_ERR_OK) {
        if (in_array($fileType, $allowedTypes)) {
            // إنشاء اسم جديد للملف لتجنب التكرار
            $newFileName = uniqid('profile_', true) . '.' . pathinfo($fileName, PATHINFO_EXTENSION);
            $destination = $profileDir . $newFileName;

            // نقل الصورة إلى المجلد
            if (move_uploaded_file($fileTmpPath, $destination)) {
                $message = "تم رفع الصورة بنجاح!";
                $profileImagePath = $destination; // حفظ مسار الصورة للاستخدام
            } else {
                $message = "حدث خطأ أثناء حفظ الصورة. حاول مرة أخرى.";
            }
        } else {
            $message = "الرجاء رفع صورة فقط (JPEG, PNG, GIF).";
        }
    } else {
        $message = "فشل رفع الصورة. رمز الخطأ: " . $fileError;
    }
}
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رفع صورة البروفايل</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            direction: rtl;
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
        }
        form {
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
        }
        input[type="file"] {
            margin: 15px 0;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .message {
            margin-top: 20px;
            font-weight: bold;
        }
        .profile-picture {
            margin-top: 20px;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            border: 2px solid #007bff;
        }
    </style>
</head>
<body>
    <h1>رفع صورة البروفايل</h1>
    <form action="" method="POST" enctype="multipart/form-data">
        <label for="files">اختر صورة:</label>
        <input type="file" name="files" id="files" required>
        <button type="submit">رفع الصورة</button>
    </form>

    <?php if (isset($message)): ?>
        <div class="message"><?php echo $message; ?></div>
    <?php endif; ?>

    <?php if (isset($profileImagePath)): ?>
        <div>
            <h3>صورة البروفايل:</h3>
            <img src="<?php echo htmlspecialchars($profileImagePath); ?>" alt="صورة البروفايل" class="profile-picture">
        </div>
    <?php endif; ?>
</body>
</html>
